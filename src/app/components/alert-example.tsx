import { Alert, AlertTitle, AlertDescription, AlertContent } from '@/components/ui/alert';
import {
  AtomIcon,
  BellIcon,
  CheckCircleIcon,
  CircleWavyQuestionIcon,
  FolderOpenIcon,
  WarningIcon,
  WarningOctagonIcon,
} from '@phosphor-icons/react';
export function AlertExample() {
  return (
    <>
      <Alert variant={'neutral'} icon={<AtomIcon weight="duotone" />}>
        <AlertTitle>Neutral</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert variant={'info'} icon={<FolderOpenIcon weight="duotone" />}>
        <AlertTitle>Sweet!</AlertTitle>
      </Alert>
      <Alert variant={'success'} icon={<CheckCircleIcon weight="duotone" />}>
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
      </Alert>
      <Alert variant={'warning'} icon={<WarningIcon weight="duotone" />}>
        <AlertTitle>Warning</AlertTitle>
      </Alert>
      <Alert variant={'highlight'} icon={<BellIcon weight="duotone" />}>
        <AlertTitle>Highlight</AlertTitle>
      </Alert>
      <Alert variant={'brand'} icon={<CircleWavyQuestionIcon weight="duotone" />}>
        <AlertTitle>brand</AlertTitle>
      </Alert>
      <Alert variant="destructive" dismissible icon={<WarningOctagonIcon />}>
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>Please verify your billing information and try again.</AlertDescription>
      </Alert>
    </>
  );
}
