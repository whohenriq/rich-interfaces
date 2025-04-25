import { Container } from "../container";
import { CustomButton } from "../custom-button";
import { CustomInput } from "../custom-input";
import { Plus } from "lucide-react";

export function TaskForm() {
  return (
    <Container className="gap-4 p-8 border-2 border-neutral-300 rounded-lg shadow-md w-full max-w-4xl h-fit">
      <h1 className="font-bold text-xl text-gray-900">Nova tarefa</h1>
      <CustomInput placeholder="Titulo da tarefa" />
      <CustomInput placeholder="Descrição(opcional)" className="h-28" />
      <CustomButton className="w-full bg-black rounded gap-4">
        <Plus size={20} className="text-white" />
        <span className="text-white">Adicionar tarefa</span>
      </CustomButton>
    </Container>
  );
}
