import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { ResumeAIService } from './resume-ai.service';

interface ResumeData {
  name: string;
  contact: string;
  experience: string[];
  education: string[];
  skills: string[];
  certifications: string[];
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  loading = false;

  constructor(private resumeAI: ResumeAIService) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  async onUpload() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }
    this.loading = true;
    const text = await this.readFileAsText(this.selectedFile);
    this.resumeAI.analyzeResume(text).subscribe({
      next: (response) => {
        const aiResume = this.extractResumeData(response);
        this.generatePDF(aiResume);
        this.loading = false;
      },
      error: (err) => {
        alert('AI resume analysis failed.');
        this.loading = false;
      }
    });
  }

  readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  extractResumeData(response: any): ResumeData {
    // Extract structured data from OpenAI response
    // This assumes the AI returns a JSON object in the message content
    try {
      const content = response.choices[0].message.content;
      return JSON.parse(content);
    } catch {
      return { name: '', contact: '', experience: [], education: [], skills: [], certifications: [] };
    }
  }

  generatePDF(resume: ResumeData) {
    const doc = new jsPDF();
    let y = 20;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(0, 129, 167);
    doc.text(resume.name || 'Your Name', 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(resume.contact || 'Contact info', 20, y);
    y += 12;
    if (resume.experience.length) {
      doc.setFontSize(16);
      doc.setTextColor(0, 129, 167);
      doc.text('Experience', 20, y);
      y += 8;
      doc.setFontSize(12);
      doc.setTextColor(0, 175, 185);
      resume.experience.forEach(exp => {
        doc.text('- ' + exp, 24, y);
        y += 7;
      });
      y += 4;
    }
    if (resume.education.length) {
      doc.setFontSize(16);
      doc.setTextColor(0, 129, 167);
      doc.text('Education', 20, y);
      y += 8;
      doc.setFontSize(12);
      doc.setTextColor(0, 175, 185);
      resume.education.forEach(edu => {
        doc.text('- ' + edu, 24, y);
        y += 7;
      });
      y += 4;
    }
    if (resume.skills.length) {
      doc.setFontSize(16);
      doc.setTextColor(0, 129, 167);
      doc.text('Skills', 20, y);
      y += 8;
      doc.setFontSize(12);
      doc.setTextColor(0, 175, 185);
      doc.text(resume.skills.join(', '), 24, y);
      y += 12;
    }
    if (resume.certifications.length) {
      doc.setFontSize(16);
      doc.setTextColor(0, 129, 167);
      doc.text('Certifications', 20, y);
      y += 8;
      doc.setFontSize(12);
      doc.setTextColor(0, 175, 185);
      resume.certifications.forEach(cert => {
        if (/AI-900/i.test(cert)) {
          doc.text('- ' + cert + ' [Azure Logo]', 24, y);
        } else {
          doc.text('- ' + cert, 24, y);
        }
        y += 7;
      });
      y += 4;
    }
    doc.save('beautiful_resume.pdf');
  }
}
