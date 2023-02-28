echo "....................."
echo "....................."
echo "Installing Tailwind"
echo "....................."
echo "....................."
npm install -D tailwindcss

echo "....................."
echo "....................."
echo "Running Tailwind init"
echo "....................."
echo "....................."
npx tailwindcss init

echo "....................."
echo "....................."
echo "Watching tailwind css"
echo "....................."
echo "....................."

npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch

