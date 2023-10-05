import Button from "@/components/button";
import Input from "@/components/forms/Input";
import { useAddWork } from "@/hooks/auth";
import { WorkExperienceFields, workExperienceSchema } from "@/utils/schema";
import { notifySuccess } from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

interface IEdit {
  closeEdit: () => void;
}

const WorkExperienceEdit = ({ closeEdit }: IEdit) => {
  const mutation = useAddWork();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkExperienceFields>({
    resolver: yupResolver(workExperienceSchema),
    defaultValues: {
      company: "",
      title: "",
      start: "",
      end: "",
      description: "",
    },
  });

  const onSubmit = ({ start, end, ...rest }: WorkExperienceFields) => {
    const [year, month, day] = start.split("-");
    const [$year, $month, $day] = end.split("-");

    const formattedStart = `${day}/${month}/${year}`;
    const formattedEnd = `${$day}/${$month}/${$year}`;

    const payload = {
      work: {
        1: {
          ...rest,
          start: formattedStart,
          // end: formattedEnd,
          is_current: false,
        },
      },
    };

    console.log(payload);

    mutation.mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        notifySuccess("Profile update successfully");
        closeEdit();
      },
    });
  };

  return (
    <div className="space-y-8 mt-8">
      <div className="flex items-center gap-x-10">
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Company"
              placeholder="Company"
              errorMsg={errors.company?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Title"
              placeholder="Title"
              errorMsg={errors.title?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
      </div>
      <div className="flex gap-x-10">
        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <Input
              label="Start Date"
              placeholder="Start date"
              type="date"
              errorMsg={errors.start?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <div className="w-full space-y-[6px]">
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <Input
                type="date"
                label="End Date"
                placeholder="End Date"
                errorMsg={errors.end?.message}
                {...field}
                className="w-full"
                required
              />
            )}
          />
          <div className="space-x-[11px]">
            <input type="checkbox" />
            <label className="text-sm text-[#808080] font-medium">
              I currently work here
            </label>
          </div>
        </div>
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            label="Description"
            placeholder="Description"
            type="text"
            errorMsg={errors.description?.message}
            {...field}
            className="w-full"
            required
          />
        )}
      />
      <div>
        <Button
          type="button"
          isLoading={mutation.isLoading}
          variant="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default WorkExperienceEdit;
