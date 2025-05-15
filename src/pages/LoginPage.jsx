
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, KeyRound, Mail } from "lucide-react";

const LoginPage = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/69860945-5e2a-4fd2-aa3c-97a6a2634b72/f91d90bda6b8ad1341e978ce03ad496f.png";
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 lg:px-8 hero-bg-gradient">
      <Card className="w-full max-w-md shadow-2xl bg-card border-border/60">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <img  src={logoUrl} alt="Raffles Logo" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">Iniciar Sesión</CardTitle>
          <CardDescription className="text-muted-foreground">Accede a tu cuenta para participar y gestionar sorteos.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="email" type="email" placeholder="tu@email.com" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground">Contraseña</Label>
              <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary" asChild>
                <Link to="/olvide-contrasena">¿Olvidaste tu contraseña?</Link>
              </Button>
            </div>
            <div className="relative">
               <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-10 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full cta-gradient hover:opacity-90 text-base py-3">
            <LogIn size={18} className="mr-2" />
            Entrar
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            ¿No tienes una cuenta?{" "}
            <Button variant="link" className="p-0 h-auto text-sm text-primary" asChild>
              <Link to="/registro">Regístrate aquí</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
