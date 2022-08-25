import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Member } from "src/app/core/models/member";

import { ImageValidator } from "src/app/shared/validators/image.validator";
import { UrlValidator } from "src/app/shared/validators/url.validator";

@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})
export class MemberFormComponent implements OnInit {
  @Input() member!: Member;
  editor = ClassicEditor;
  editing = false;
  fileName = "";

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    image: ["", [Validators.required, ImageValidator]],
    description: ["", Validators.required],
    links: [
      [],
      {
        validators: [Validators.required, UrlValidator],
        updateOn: "submit",
      },
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue(this.member);
    this.form.value.name == "" ? (this.editing = false) : (this.editing = true);
    if (this.form.value.description == "") {
      this.form.patchValue({
        description: "Escriba aqui una descripcion",
      });
    }
  }
  addLink(event: any): void {
    const link = event.value;
    if (link != "") {
      this.uploadLinks(link);
    }
    this.clearInput(event);
  }
  clearInput(event: any) {
    event.value = "";
  }
  uploadLinks(link: string) {
    const links: string[] = this.form.get("links")?.value;
    if (typeof link == "string") {
      links.push(link);
      this.form.controls["links"].setValue(links);
    }
  }
  removeLink(link: string): void {
    const links = this.form.get("links")?.value;
    const index = links.indexOf(link);
    if (index >= 0) {
      links.splice(index, 1);
      this.form.patchValue({
        links: links,
      });
    }
  }
  fileChangeEvent(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.form.controls["image"].setValue(file);
    }
  }
  send(): void {
    console.log(this.form.value);
  }
  cancel(): void {
  }
}
