import { Component, AfterViewInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  year = new Date().getFullYear();
  menu = false;
  sending = false;
  error = false;
  form = { name: "", email: "", message: "" };
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            this.observer?.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  navigateTo(event: Event, sectionId: string): void {
    event.preventDefault();
    this.menu = false;
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.classList.add("visible");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#" + sectionId);
  }

  send(): void {
    this.error = false;

    const recipient = "ashishkumarchaudhary66@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${this.form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
}
