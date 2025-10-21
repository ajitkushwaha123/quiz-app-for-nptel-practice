"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTransition, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";

const SubjectDialog = () => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      nptelUrl: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Title must be at least 3 characters")
        .required("Title is required"),
      description: Yup.string().optional(),
      nptelUrl: Yup.string().url("Enter a valid URL").optional(),
    }),
    onSubmit: async (values, { resetForm }) => {
      startTransition(async () => {
        try {
          await axios.post("/api/subjects", values);
          resetForm();
          setOpen(false);
        } catch (err) {
          console.error("Error creating subject:", err);
        }
      });
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ Trigger button */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-start gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:bg-accent/50 px-3 py-2 rounded-lg"
        >
          <Plus className="w-4 h-4" />
          Add Subject
        </Button>
      </DialogTrigger>

      {/* ✅ Dialog UI */}
      <DialogContent className="sm:max-w-[520px] rounded-xl shadow-lg p-6 bg-card border border-border/50">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-foreground">
            Create New Subject
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Fill in the details below to organize your NPTEL preparation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formik.handleSubmit} className="mt-5 space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="font-medium text-foreground/90">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., Machine Learning"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/40 transition-all"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-sm text-destructive">{formik.errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="font-medium text-foreground/90"
            >
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Short description about the subject..."
              rows={3}
              className="resize-none rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/40 transition-all"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="nptelUrl"
              className="font-medium text-foreground/90"
            >
              NPTEL URL
            </Label>
            <Input
              id="nptelUrl"
              name="nptelUrl"
              placeholder="https://nptel.ac.in/courses/..."
              value={formik.values.nptelUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/40 transition-all"
            />
            {formik.touched.nptelUrl && formik.errors.nptelUrl && (
              <p className="text-sm text-destructive">
                {formik.errors.nptelUrl}
              </p>
            )}
          </div>

          <DialogFooter className="flex justify-end gap-3 pt-4 border-t border-border/40">
            <DialogClose asChild>
              <Button variant="outline" type="button" className="rounded-lg">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="rounded-lg font-medium"
              disabled={isPending || formik.isSubmitting}
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Subject"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubjectDialog;
