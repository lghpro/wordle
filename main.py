from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()

answer = "TRAIN"

@app.answer("/answer")
def get_answer():
    return answer

app.mount("/wordle", StaticFiles(directory="static",html=True), name="static")