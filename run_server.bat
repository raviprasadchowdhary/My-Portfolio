@echo off
echo Starting Portfolio Local Server...
echo.
echo 1. Opening browser to http://localhost:8000...
start http://localhost:8000
echo.
echo 2. Starting Python HTTP Server...
echo    (Close this window to stop the server)
echo.
python -m http.server 8000
pause
