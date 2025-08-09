import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { authService } from "@/services/authService";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return authService.onChange((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  return { user, loading, isLoggedIn: !!user };
};
