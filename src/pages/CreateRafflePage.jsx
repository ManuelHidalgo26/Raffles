
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ImagePlus, Tag, Users, DollarSign, PlusCircle } from "lucide-react";

const CreateRafflePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-foreground">Crea Tu Propio Sorteo</h1>
        <p className="text-lg text-muted-foreground">Define los detalles y lanza tu sorteo en minutos.</p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg bg-card border-border/60">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Detalles del Sorteo</CardTitle>
          <CardDescription className="text-muted-foreground">Completa la información para configurar tu nuevo sorteo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="raffle-title" className="text-foreground">Título del Sorteo</Label>
            <Input id="raffle-title" placeholder="Ej: Sorteo Increíble de Verano" className="bg-input text-foreground placeholder:text-muted-foreground" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="raffle-description" className="text-foreground">Descripción</Label>
            <Textarea id="raffle-description" placeholder="Describe los premios, reglas y cualquier detalle importante." rows={4} className="bg-input text-foreground placeholder:text-muted-foreground" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="raffle-prize" className="text-foreground">Premio Principal</Label>
              <Input id="raffle-prize" placeholder="Ej: iPhone 15 Pro" className="bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="raffle-end-date" className="text-foreground">Fecha de Finalización</Label>
              <div className="relative">
                <Input id="raffle-end-date" type="date" className="pr-10 bg-input text-foreground placeholder:text-muted-foreground" />
                <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="raffle-tags" className="text-foreground">Etiquetas (separadas por coma)</Label>
            <div className="relative">
              <Input id="raffle-tags" placeholder="Ej: tecnología, smartphone, gratis" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="raffle-image" className="text-foreground">Imagen del Sorteo</Label>
            <div className="flex items-center gap-3 p-3 border border-dashed border-border/80 rounded-md">
              <ImagePlus className="h-8 w-8 text-muted-foreground" />
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground">Arrastra una imagen o</p>
                 <Button variant="link" className="p-0 h-auto text-sm text-primary">selecciona un archivo</Button>
              </div>
              <Input id="raffle-image" type="file" className="sr-only" />
            </div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="raffle-max-participants" className="text-foreground">Máximo de Participantes (opcional)</Label>
              <div className="relative">
                <Input id="raffle-max-participants" type="number" placeholder="Ej: 1000" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
                 <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="raffle-ticket-price" className="text-foreground">Precio del Ticket (0 para gratis)</Label>
               <div className="relative">
                <Input id="raffle-ticket-price" type="number" placeholder="0.00" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
                 <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
            <Link to="/sorteos">Cancelar</Link>
          </Button>
          <Button className="cta-gradient hover:opacity-90">
            <PlusCircle size={18} className="mr-2" />
            Publicar Sorteo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateRafflePage;
