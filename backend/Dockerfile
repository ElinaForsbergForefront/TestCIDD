# ---------- build ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj first (faster cache)
COPY ./Api/Api.csproj ./Api/
COPY ./Api.Tests/Api.Tests.csproj ./Api.Tests/
RUN dotnet restore ./Api/Api.csproj

# Copy everything and build
COPY . .
RUN dotnet build ./Api/Api.csproj -c Release --no-restore

# ---------- test ----------
FROM build AS test
RUN dotnet test ./Api.Tests/Api.Tests.csproj -c Release --no-build

# ---------- publish ----------
FROM build AS publish
RUN dotnet publish ./Api/Api.csproj -c Release -o /app/publish --no-build

# ---------- prod ----------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS prod
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "Api.dll"]

# ---------- dev ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS dev
WORKDIR /src
COPY . .
WORKDIR /src/Api
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Development
CMD ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:8080"]