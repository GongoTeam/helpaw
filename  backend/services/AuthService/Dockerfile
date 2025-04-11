FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /app

COPY . .

RUN dotnet restore
RUN dotnet build
RUN dotnet publish -c Release -o /app/publish

RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"

COPY entrypoint.sh /app/publish
RUN chmod +x /app/publish/entrypoint.sh

WORKDIR /app/publish

ENTRYPOINT ["./entrypoint.sh"]
