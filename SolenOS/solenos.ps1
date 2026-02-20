# SolenOS CLI
# Usage: solenos start | solenos build | solenos preview | solenos help

param(
    [Parameter(Position=0)]
    [string]$Command = "start"
)

$logo = @"
================================
      SolenOS v0.0.001
   Next Generation Web OS
================================
"@

if ($Command -eq "start") {
    Write-Host $logo -ForegroundColor Cyan
    Write-Host "Starting development server..." -ForegroundColor Green
    Write-Host "Open http://localhost:5173/ in your browser" -ForegroundColor Gray
    npm run dev
}
elseif ($Command -eq "build") {
    Write-Host $logo -ForegroundColor Cyan
    Write-Host "Building for production..." -ForegroundColor Yellow
    npm run build
}
elseif ($Command -eq "preview") {
    Write-Host $logo -ForegroundColor Cyan
    Write-Host "Previewing production build..." -ForegroundColor Yellow
    npm run preview
}
elseif ($Command -eq "setup") {
    Write-Host "Setting up solenos command..." -ForegroundColor Cyan
    
    $profilePath = $PROFILE.CurrentUserCurrentHost
    $aliasLine = "Set-Alias solenos '$PSScriptRoot\solenos.ps1' -Force"
    
    if (!(Test-Path $profilePath)) {
        New-Item -ItemType File -Path $profilePath -Force | Out-Null
    }
    
    $content = Get-Content $profilePath -Raw -ErrorAction SilentlyContinue
    if ($content -notmatch "alias solenos") {
        Add-Content -Path $profilePath -Value "`n$aliasLine"
        Write-Host "Alias added! Restart PowerShell or run: . `$PROFILE" -ForegroundColor Green
        Write-Host "Then use: solenos start" -ForegroundColor Cyan
    } else {
        Write-Host "Already setup! Use: solenos start" -ForegroundColor Green
    }
}
elseif ($Command -eq "help") {
    Write-Host " " -NoNewline
    Write-Host "SolenOS Guide" -ForegroundColor Cyan
    Write-Host " "
    Write-Host "Usage:" -ForegroundColor Yellow
    Write-Host "  .\solenos start      Start development server"
    Write-Host "  .\solenos build      Build for production"
    Write-Host "  .\solenos preview    Preview production build"
    Write-Host "  .\solenos setup      Setup solenos command"
    Write-Host "  .\solenos help       Show this guide"
    Write-Host " "
    Write-Host "First time? Run: solenos setup" -ForegroundColor Green
}
else {
    Write-Host "Unknown command: $Command" -ForegroundColor Red
    Write-Host "Run: solenos help" -ForegroundColor Yellow
}
