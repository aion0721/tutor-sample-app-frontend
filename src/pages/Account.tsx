import { Box, Heading, Stack, Input, Button, Field } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Toaster, toaster } from "@/components/ui/toaster";
import { PasswordInput } from "@/components/ui/password-input";

interface FormValues {
  username: string;
  mailaddress: string;
  password: string;
}

export const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => toaster.create({ title: "create" }));

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderColor="gray.300"
      rounded="lg"
      shadow="sm"
      mx="auto"
      maxW="600px"
    >
      <Toaster />
      <Heading size="md" mb={6}>
        Account
      </Heading>

      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field.Root invalid={!!errors.username}>
            <Field.Label>Username</Field.Label>
            <Input {...register("username")} />
            <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.mailaddress}>
            <Field.Label>Mailaddress</Field.Label>
            <Input {...register("mailaddress")} />
            <Field.ErrorText>{errors.mailaddress?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label>Password</Field.Label>
            <PasswordInput {...register("password")} />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};
