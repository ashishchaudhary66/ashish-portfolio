import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

type ResumeOption = {
  id: string;
  name: string;
  fileName: string;
  url: string;
};

@Component({
  selector: "app-resume-converter",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./resume-converter.component.html",
  styleUrls: ["./resume-converter.component.css"],
})
export class ResumeConverterComponent {
  readonly resumes: ResumeOption[] = [
    {
      id: "react",
      name: "React + .NET Full Stack",
      fileName: "React_DotNet_FullStack.tex",
      url: "https://raw.githubusercontent.com/ashishchaudhary66/resume/main/resumes/React_DotNet_FullStack.tex",
    },
    {
      id: "angular",
      name: "Angular + .NET Full Stack",
      fileName: "Angular_DotNet_FullStack.tex",
      url: "https://raw.githubusercontent.com/ashishchaudhary66/resume/main/resumes/Angular_DotNet_FullStack.tex",
    },
    {
      id: "combined",
      name: "React + Angular + .NET Full Stack",
      fileName: "React_Angular_DotNet_FullStack.tex",
      url: "https://raw.githubusercontent.com/ashishchaudhary66/resume/main/resumes/React_Angular_DotNet_FullStack.tex",
    },
  ];

  selectedId = "react";
  pdfUrl: string | null = null;
  safePdfUrl: SafeResourceUrl | null = null;
  generating = false;
  errorMessage = "";

  constructor(private sanitizer: DomSanitizer) {}

  get selectedResume(): ResumeOption {
    return this.resumes.find((resume) => resume.id === this.selectedId) ?? this.resumes[0];
  }

  generatePdf(): void {
    this.errorMessage = "";
    this.generating = true;
    this.pdfUrl = null;
    this.safePdfUrl = null;

    // Pressa accepts a public .tex URL and returns the compiled PDF directly.
    // The LaTeX source is not placed in the query string.
    const compileUrl =
      "https://api.pressa.dev/compile?url=" +
      encodeURIComponent(this.selectedResume.url) +
      "&command=pdflatex";

    this.pdfUrl = compileUrl;
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(compileUrl);
    this.generating = false;
  }

  openPdf(): void {
    if (this.pdfUrl) {
      window.open(this.pdfUrl, "_blank", "noopener,noreferrer");
    }
  }

  onResumeChange(): void {
    this.pdfUrl = null;
    this.safePdfUrl = null;
    this.errorMessage = "";
  }
}
