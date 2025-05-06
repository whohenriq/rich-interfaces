import { Container } from "../container";
import { CustomButton } from "../custom-button";
import { CustomInput } from "../custom-input";
import { Plus, Save } from "lucide-react";

interface TaskFormProps {
  onClick?: () => void;
  taskName: string;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  editing?: boolean;
}

export function TaskForm({
  onClick,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  editing,
}: TaskFormProps) {
  return (
    <Container className="gap-4 p-8 border-2 border-neutral-300 rounded-lg shadow-md w-full max-w-4xl h-fit">
      <h1 className="font-bold text-xl text-gray-900">
        {editing ? "Editar tarefa" : "Nova tarefa"}
      </h1>
      <CustomInput
        placeholder="Título da tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <CustomInput
        placeholder="Descrição (opcional)"
        className="h-28"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <CustomButton
        onClick={onClick}
        className="w-full bg-black rounded gap-4 hover:bg-black/90"
      >
        {editing ? (
          <>
            <Save size={20} className="text-white" />
            <span className="text-white">Salvar alterações</span>
          </>
        ) : (
          <>
            <Plus size={20} className="text-white" />
            <span className="text-white">Adicionar tarefa</span>
          </>
        )}
      </CustomButton>
    </Container>
  );
}
