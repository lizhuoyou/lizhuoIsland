cd frontend
yarn
yarn build
cd ..
rm -rf backend/build
cp -R frontend/build backend/build
cd backend
pip3 freeze > requirements.txt
docker build -t lizhuo-web:latest .