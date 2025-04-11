#!/bin/bash
echo "Applying EF Core migrations..."

dotnet ef database update --project /app/AuthService.csproj --startup-project /app/AuthService.csproj --no-build

echo "Starting service..."
dotnet /app/publish/AuthService.dll
