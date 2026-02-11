import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertContent,
  AlertAction,
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
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
      <Alert size="inline" variant="info" icon={<AtomIcon weight="duotone" />}>
        <AlertDescription>
          This is an inline alert with just a description.
        </AlertDescription>
        <AlertAction>
          <Button variant="elevated" size="xs" className="rounded-e-lg">
            Action
          </Button>
        </AlertAction>
      </Alert>
      <Alert variant={'neutral'} icon={<AtomIcon weight="duotone" />}>
        <AlertTitle>Neutral</AlertTitle>
        <AlertDescription>
          This is an alert with direct children.
        </AlertDescription>
        <AlertAction>
          <Button>Action</Button>
        </AlertAction>
      </Alert>
      <Alert variant={'neutral'} icon={<AtomIcon weight="duotone" />}>
        <AlertContent>
          <AlertTitle>Neutral</AlertTitle>
          <AlertDescription>
            This is an alert with everything wrapped in AlertContent.
          </AlertDescription>
        </AlertContent>
        <AlertAction>
          <Button>Action</Button>
        </AlertAction>
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
      <Alert
        variant={'brand'}
        icon={<CircleWavyQuestionIcon weight="duotone" />}
      >
        <AlertTitle>brand</AlertTitle>
      </Alert>
      <Alert
        variant="error"
        dismissible
        icon={<WarningOctagonIcon weight="fill" />}
      >
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          Please verify your billing information and try again.
        </AlertDescription>
      </Alert>
      <Alert
        variant="caution"
        dismissible
        icon={<WarningIcon weight="duotone" />}
      >
        <AlertTitle>Memory almost full!</AlertTitle>
        <AlertDescription>
          Your system is running low on memory. Please free up some space.
        </AlertDescription>
      </Alert>
      <Alert
        variant="destructive"
        dismissible
        icon={<WarningOctagonIcon weight="fill" />}
      >
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          Please verify your billing information and try again.
        </AlertDescription>
      </Alert>
    </>
  );
}
