# Configuración
$archivoSalida = "contexto_proyecto.txt"
$directorioRaiz = Get-Location

# Carpetas a ignorar (puedes agregar más aquí, ej: "build", "dist", ".next")
$carpetasIgnoradas = @("node_modules", ".git", ".vscode", "dist", "build", "coverage")

# Extensiones de archivos a incluir (para evitar leer imágenes o .exe)
$extensionesPermitidas = @(
    ".js", ".jsx", ".ts", ".tsx", 
    ".html", ".css", ".scss", 
    ".json", ".md", ".txt", 
    ".py", ".sh", ".ps1", 
    ".yml", ".yaml", ".env",
    ".sql", ".dockerfile"
)

# Limpiar archivo de salida previo si existe
if (Test-Path $archivoSalida) {
    Remove-Item $archivoSalida
}

Write-Host "Iniciando exportación del proyecto..." -ForegroundColor Cyan

# Obtener todos los archivos recursivamente
$archivos = Get-ChildItem -Recurse -File | Where-Object {
    $ruta = $_.FullName
    $esIgnorado = $false
    
    # 1. Verificar si está en una carpeta ignorada
    foreach ($carpeta in $carpetasIgnoradas) {
        if ($ruta -match [regex]::Escape("\$carpeta\")) {
            $esIgnorado = $true
            break
        }
    }

    # 2. Verificar si la extensión es válida y no es el archivo de salida
    $esExtensionValida = $extensionesPermitidas -contains $_.Extension
    $noEsSalida = $_.Name -ne $archivoSalida

    return (-not $esIgnorado) -and $esExtensionValida -and $noEsSalida
}

# Procesar y escribir
foreach ($archivo in $archivos) {
    # Ruta relativa para que sea más legible
    $rutaRelativa = $archivo.FullName.Replace($directorioRaiz.Path, "")
    
    Write-Host "Procesando: $rutaRelativa" -ForegroundColor Gray

    # Escribir encabezado del archivo
    Add-Content -Path $archivoSalida -Value "`n================================================================================"
    Add-Content -Path $archivoSalida -Value "RUTA: $rutaRelativa"
    Add-Content -Path $archivoSalida -Value "================================================================================`n"

    # Leer contenido y escribirlo (UTF8 para evitar problemas de acentos)
    try {
        $contenido = Get-Content -Path $archivo.FullName -Raw -Encoding UTF8
        Add-Content -Path $archivoSalida -Value $contenido
    }
    catch {
        Add-Content -Path $archivoSalida -Value "[ERROR AL LEER EL ARCHIVO]"
    }
}

Write-Host "`n¡Listo! Todo el contenido se guardó en: $archivoSalida" -ForegroundColor Green