import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeAIService {
  private openaiUrl = 'https://api.openai.com/v1/chat/completions'; // For OpenAI GPT-3.5/4
  private apiKey = 'YOUR_OPENAI_API_KEY'; // <-- Replace with your key

  constructor(private http: HttpClient) {}

  analyzeResume(text: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a resume parser. Extract and structure the resume into name, contact, experience, education, skills, certifications.'
        },
        {
          role: 'user',
          content: text
        }
      ]
    };
    return this.http.post(this.openaiUrl, body, { headers });
  }
}
