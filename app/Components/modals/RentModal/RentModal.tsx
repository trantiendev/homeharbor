'use client';

import { useMemo, useState } from 'react';
import Modal from '../Modal';
import useRentModal from '@/app/hooks/useRentModal';
import Heading from '../../Heading';
import CategoryInput from '../../inputs/CategoryInput';
import { categories } from '../../navbar/Categories';
import { FieldValues, useForm } from 'react-hook-form';
import CountrySelect from '../../inputs/CountrySelect';
import dynamic from 'next/dynamic';
import Counter from '../../inputs/Counter';
import CategoryStep from './RentModalSteps/CategoryStep';
import LocationStep from './RentModalSteps/LocationStep';
import InfoStep from './RentModalSteps/InfoStep';
import ImagesStep from './RentModalSteps/ImagesStep';

interface IRentModalProps { }

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const initialFormValues: FieldValues = {
  category: '',
  location: null,
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
  imageSrc: '',
  price: 1,
  title: '',
  description: '',
};

const RentModal: React.FunctionComponent<IRentModalProps> = (props) => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<FieldValues>({
    defaultValues: initialFormValues,
  });

  const category = watch('category');
  const location = watch('location');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');

  // Trigger import Map Cpm, solution: https://placekit.io/blog/articles/making-react-leaflet-work-with-nextjs-493i
  const Map = useMemo(
    () =>
      dynamic(() => import('../../Map'), {
        ssr: false,
        loading: () => <div>loading...</div>,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  let bodyContent;

  switch (step) {
    case STEPS.LOCATION:
      bodyContent = (
        <LocationStep
          location={location}
          setLocation={setCustomValue}
          Map={Map}
        />
      );
      break;
    case STEPS.INFO:
      bodyContent = (
        <InfoStep
          guestCount={guestCount}
          roomCount={roomCount}
          bathroomCount={bathroomCount}
          setInfo={setCustomValue}
        />
      );
      break;
    case STEPS.IMAGES:
      bodyContent = (
        <ImagesStep />
      )
      break;
    case STEPS.CATEGORY:
    default:
      bodyContent = (
        <CategoryStep category={category} setCategory={setCustomValue} />
      );
      break;
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return 'Create';

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined;

    return 'Back';
  }, [step]);

  return (
    <Modal
      title="Homeharbor your home"
      onClose={rentModal.onClose}
      isOpen={rentModal.isOpen}
      onSubmit={onNext}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      actionLabel={actionLabel}
      body={bodyContent}
    />
  );
};

export default RentModal;
