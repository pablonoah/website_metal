"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const inputClass =
  "mt-1.5 bg-slate-50 border-slate-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400 text-slate-700 transition-all h-11";

export function QuoteForm({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    data.mode = mode;

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/gyiti6xtwynnqray137smctjvqkov16l",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Erreur serveur");

      setOpen(false);
      setSuccess(true);
      form.reset();
      setMode("");
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[580px] bg-white/95 backdrop-blur-2xl border-slate-200/60 rounded-3xl max-h-[90vh] overflow-y-auto shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
          <DialogHeader>
            <DialogTitle className="text-xl text-slate-800 font-bold">
              Demande de devis
            </DialogTitle>
            <p className="text-sm text-slate-500 mt-1">
              Remplissez le formulaire, nous vous répondons sous 24h.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div>
              <Label htmlFor="entreprise" className="text-slate-600 font-medium">
                Nom de l&apos;entreprise{" "}
                <span className="text-blue-500">*</span>
              </Label>
              <Input
                id="entreprise"
                name="entreprise"
                required
                placeholder="Ex: Safran, Airbus..."
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nom" className="text-slate-600 font-medium">
                  Nom <span className="text-blue-500">*</span>
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  required
                  placeholder="Dupont"
                  className={inputClass}
                />
              </div>
              <div>
                <Label htmlFor="prenom" className="text-slate-600 font-medium">
                  Prénom <span className="text-blue-500">*</span>
                </Label>
                <Input
                  id="prenom"
                  name="prenom"
                  required
                  placeholder="Jean"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-600 font-medium">
                Email <span className="text-blue-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean.dupont@entreprise.fr"
                className={inputClass}
              />
            </div>

            <div>
              <Label htmlFor="telephone" className="text-slate-600 font-medium">
                Téléphone <span className="text-blue-500">*</span>
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                required
                placeholder="06 12 34 56 78"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="participants" className="text-slate-600 font-medium">
                  Participants <span className="text-blue-500">*</span>
                </Label>
                <Input
                  id="participants"
                  name="participants"
                  type="number"
                  min={1}
                  required
                  placeholder="5"
                  className={inputClass}
                />
              </div>
              <div>
                <Label htmlFor="jours" className="text-slate-600 font-medium">
                  Nombre de jours <span className="text-blue-500">*</span>
                </Label>
                <Input
                  id="jours"
                  name="jours"
                  type="number"
                  min={1}
                  max={10}
                  required
                  placeholder="3"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <Label className="text-slate-600 font-medium">
                Mode de formation <span className="text-blue-500">*</span>
              </Label>
              <Select value={mode} onValueChange={setMode} required>
                <SelectTrigger className="mt-1.5 bg-slate-50 border-slate-200 rounded-xl h-11 text-slate-700">
                  <SelectValue placeholder="Sélectionnez un mode" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 rounded-xl shadow-lg">
                  <SelectItem value="Dans nos locaux">
                    Dans nos locaux
                  </SelectItem>
                  <SelectItem value="Dans les locaux du client">
                    Dans les locaux du client
                  </SelectItem>
                  <SelectItem value="En visio">En visio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {mode === "Dans les locaux du client" && (
              <div>
                <Label htmlFor="adresse" className="text-slate-600 font-medium">
                  Adresse complète <span className="text-blue-500">*</span>
                </Label>
                <Textarea
                  id="adresse"
                  name="adresse"
                  required
                  rows={2}
                  placeholder="Adresse complète du lieu de formation"
                  className="mt-1.5 bg-slate-50 border-slate-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400 text-slate-700 transition-all"
                />
              </div>
            )}

            <div>
              <Label htmlFor="commentaires" className="text-slate-600 font-medium">
                Commentaires
              </Label>
              <Textarea
                id="commentaires"
                name="commentaires"
                rows={3}
                placeholder="Précisions, contraintes, questions..."
                className="mt-1.5 bg-slate-50 border-slate-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400 text-slate-700 transition-all"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !mode}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.2)] transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Envoyer ma demande
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success toast */}
      {success && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] animate-in slide-in-from-bottom-4 fade-in duration-400">
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-7 py-5 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
            <p className="font-medium">
              Votre demande a bien été envoyée, vous recevrez votre devis sous
              24h.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
