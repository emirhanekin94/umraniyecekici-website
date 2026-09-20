Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\emirh\.gemini\antigravity-ide\brain\6c3d00a8-899b-4f46-af5a-882359899e7b\umraniye_cekici_logo_1789933569163.jpg"
$global:srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)

function MakePerfectCircleLogo([int]$size, [string]$outPath) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # 1. Rozeti dairesel kenarlarından tam kırp (Dışarıdaki siyah kare çerçeveyi %100 yok et)
    $srcRect = New-Object System.Drawing.Rectangle(132, 132, 760, 760)

    # Çıkış tuvalini tam daire olarak maskele (Köşeler şeffaf)
    $clipPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $clipPath.AddEllipse(2, 2, ($size - 4), ($size - 4))
    $g.SetClip($clipPath)

    # Resmi çiz
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $g.DrawImage($global:srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    # 2. Alt kısımdaki İngilizce yazıları ("24/7 ROADSIDE ASSISTANCE / AUTO TOWING SERVICE")
    # tasarımın orijinal lacivert arka plan tonuyla pürüzsüzce kapat
    $bannerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 9, 13, 23))
    $rx = [float]($size * 0.15)
    $ry = [float]($size * 0.59)
    $rw = [float]($size * 0.70)
    $rh = [float]($size * 0.18)
    $g.FillEllipse($bannerBrush, $rx, $ry, $rw, $rh)

    # 3. Yerine şık Türkçe "7/24 OTO KURTARMA" ibaresi yaz
    $fontFam = New-Object System.Drawing.FontFamily("Arial")
    $fontSize = [float]($size * 0.052)
    $font = New-Object System.Drawing.Font($fontFam, $fontSize, [System.Drawing.FontStyle]::Bold)
    $orangeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 120, 0))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $textRect = New-Object System.Drawing.RectangleF(0.0, [float]($size * 0.62), [float]$size, [float]($size * 0.10))
    $g.DrawString("7/24 OTO KURTARMA", $font, $orangeBrush, $textRect, $sf)

    # İnce turuncu süs çizgisi
    $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 255, 140, 20), [float]($size * 0.007))
    $g.DrawLine($linePen, [float]($size * 0.28), [float]($size * 0.72), [float]($size * 0.72), [float]($size * 0.72))

    # 4. Maskeyi kaldır ve dış çembere cilalı krom + neon turuncu halka bas
    $g.ResetClip()
    $chromePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 220, 225, 235), [float]($size * 0.024))
    $g.DrawEllipse($chromePen, [float]($size * 0.015), [float]($size * 0.015), [float]($size * 0.97), [float]($size * 0.97))
    
    $neonPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 255, 95, 0), [float]($size * 0.015))
    $g.DrawEllipse($neonPen, [float]($size * 0.032), [float]($size * 0.032), [float]($size * 0.936), [float]($size * 0.936))

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

MakePerfectCircleLogo 512 "images\logo.png"
MakePerfectCircleLogo 192 "images\logo-192.png"
MakePerfectCircleLogo 180 "images\apple-touch-icon.png"
MakePerfectCircleLogo 180 "apple-touch-icon.png"
MakePerfectCircleLogo 48 "images\favicon-48x48.png"
MakePerfectCircleLogo 32 "images\favicon-32x32.png"
MakePerfectCircleLogo 16 "images\favicon-16x16.png"
MakePerfectCircleLogo 32 "favicon.ico"
MakePerfectCircleLogo 32 "images\favicon.ico"

$global:srcImg.Dispose()
Write-Output "ALL_PERFECT_SUCCESS"
