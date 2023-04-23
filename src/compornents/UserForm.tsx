import { useForm } from "react-hook-form";

type Form = {
  userName: string
};

function UserForm() {
  const { register, handleSubmit } = useForm<Form>();
  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>ユーザー名</label>
      <br/>
      @ <input type="text" {...register('userName')} />
      <br/>
      <input type="submit" value="選曲" />
    </form>
  );
}

export default UserForm;
