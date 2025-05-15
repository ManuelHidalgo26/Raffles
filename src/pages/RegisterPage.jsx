
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, KeyRound, Mail, UserCircle2 } from "lucide-react";

const RegisterPage = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/69860945-5e2a-4fd2-aa3c-97a6a2634b72/f91d90bda6b8ad1341e978ce03ad496f.png";
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 lg:px-8 hero-bg-gradient">
      <Card className="w-full max-w-md shadow-2xl bg-card border-border/60">
        <CardHeader className="text-center">
           <div className="mx-auto mb-4">
             <img  src={logoUrl} alt="Raffles Logo" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">Crear Cuenta</CardTitle>
          <CardDescription className="text-muted-foreground">Únete a Raffles y empieza a disfrutar de los mejores sorteos.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullname" className="text-foreground">Nombre Completo</Label>
             <div className="relative">
              <UserCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="fullname" placeholder="Tu Nombre Completo" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="email" type="email" placeholder="tu@email.com" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Contraseña</Label>
            <div className="relative">
               <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="password" type="password" placeholder="Crea una contraseña segura" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
           <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-foreground">Confirmar Contraseña</Label>
            <div className="relative">
               <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="confirm-password" type="password" placeholder="Repite tu contraseña" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
            <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
              Acepto los{" "}
              <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary" asChild>
                <Link to="/terminos">Términos y Condiciones</Link>
              </Button>
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full cta-gradient hover:opacity-90 text-base py-3">
            <UserPlus size={18} className="mr-2" />
            Registrarme
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            ¿Ya tienes una cuenta?{" "}
            <Button variant="link" className="p-0 h-auto text-sm text-primary" asChild>
              <Link to="/login">Inicia sesión aquí</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
