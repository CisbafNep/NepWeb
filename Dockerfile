FROM python:3.12.9

WORKDIR /app

COPY /src .

CMD [ "python", "-m", "http.server", "8000"]