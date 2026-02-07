Param(
  [string]$Source = "public/layout.jpg",
  [string]$Dest = "app/icon.png",
  [int]$Size = 256,
  [double]$Zoom = 1.3,
  [switch]$Circular = $false
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $Source)) {
  Write-Error "Source image not found: $Source"
  exit 1
}

$bmp = New-Object System.Drawing.Bitmap($Size, $Size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.Clear([System.Drawing.Color]::Transparent)

if ($Circular) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse(0, 0, $Size, $Size)
  $g.SetClip($path)
}

$img = [System.Drawing.Image]::FromFile($Source)

$scale = [Math]::Max($Size / $img.Width, $Size / $img.Height) * $Zoom
$drawW = [int]($img.Width * $scale)
$drawH = [int]($img.Height * $scale)
$x = -[int](($drawW - $Size) / 2)
$y = -[int](($drawH - $Size) / 2)

$g.DrawImage($img, $x, $y, $drawW, $drawH)

$g.Dispose()
$img.Dispose()

$bmp.Save($Dest, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

if ($Circular) {
  Write-Host "Created circular icon at $Dest"
} else {
  Write-Host "Created square icon at $Dest"
}
