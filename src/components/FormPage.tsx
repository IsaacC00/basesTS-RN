import { useForm } from "react-hook-form"

type FormInputs = {
    email: string,
    password: string
}

export const FormPage = () => {

    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues: {
            email: 'isaac@correo.com',
            password: '123456'
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });

    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) } >
            <h1 className="text-white">Formularios</h1>
            <div className="flex flex-col space-y-2 w-[500px]">

                <input
                    type="email"
                    placeholder="email"
                    className="border border-gray-300 p-2 rounded-xl"
                    {...register("email", { required: true })}
                />

                <input
                    type="password"
                    placeholder="password"
                    className="border border-gray-300 p-2 rounded-xl"
                    {...register('password', { required: true })}
                />

                <button
                    className="bg-blue-600 text-white p-2 rounded-lg"
                    type="submit"
                >
                    Ingresar
                </button>

            </div>
        </form>
    )
}
