"use client";
import { React, useEffect } from "react";
import useEmployees from "@/hooks/useEmployees";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { employees, loading, error } = useEmployees();
  const router = useRouter();

  useEffect(() => {}, []);
  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os usuários: {error.message}</p>;
  }

  return (
    <div className="mt-14">
      {employees.length > 0 ? (
        <div className="flex justify-around flex-wrap gap-24">
          {employees.map((employee) => (
            <a
              className="cursor-pointer"
              key={employee.id}
              onClick={() => router.push(`/colaborador/${employee.id}`)}
            >
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <div className="flex items-center justify-center p-4">
                  <Image
                    style={{ borderRadius: "50%" }}
                    width={120}
                    height={120}
                    src={employee.urlImage}
                    alt="Imagem do Card"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {employee.fullName}
                  </div>
                  <p className="text-gray-700 text-base mb-2">
                    Departamento: {employee.departament.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Cargo: {employee.position.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Nenhum colaborador encontrado.</div>
      )}
    </div>
  );
}
