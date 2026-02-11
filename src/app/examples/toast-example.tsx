'use client';

import { Button } from '@/components/ui/button';
import { toastManager } from '@/components/toast';

export function ToastExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Event has been created',
              description: 'Monday, January 3rd at 6:00pm',
            });
          }}
        >
          Basic Toast
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Success!',
              description: 'Your changes have been saved.',
              type: 'success',
            });
          }}
        >
          Success
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Error',
              description: 'Something went wrong. Please try again.',
              type: 'error',
            });
          }}
        >
          Error
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Warning',
              description: 'This action cannot be undone.',
              type: 'warning',
            });
          }}
        >
          Warning
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Info',
              description: 'New features are available.',
              type: 'info',
            });
          }}
        >
          Info
        </Button>
      </div>
      <Button
        variant="default"
        onClick={() => {
          const id = toastManager.add({
            title: 'Processing...',
            description: 'Please wait while we process your request.',
            type: 'loading',
          });

          // Simulate async operation
          setTimeout(() => {
            toastManager.close(id);
            toastManager.add({
              title: 'Success!',
              description: 'Your request has been processed.',
              type: 'success',
            });
          }, 3000);
        }}
      >
        Loading Toast
      </Button>
    </div>
  );
}

export function ToastWithActionExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            const id = toastManager.add({
              title: 'Event has been created',
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              type: 'success',
              actionProps: {
                children: 'Undo',
                onClick: () => {
                  toastManager.close(id);
                  toastManager.add({
                    title: 'Event undone',
                    description: 'The event has been removed.',
                    type: 'info',
                  });
                },
              },
            });
          }}
        >
          With Action
        </Button>
      </div>
    </div>
  );
}

export function ToastPromiseExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            const promise = new Promise((resolve, reject) => {
              setTimeout(() => {
                if (Math.random() > 0.5) {
                  resolve('Data saved successfully!');
                } else {
                  reject(new Error('Failed to save data'));
                }
              }, 2000);
            });

            toastManager.promise(promise, {
              loading: {
                title: 'Saving...',
                description: 'Please wait while we save your data.',
                type: 'loading',
              },
              success: (result) => ({
                title: 'Success!',
                description: result as string,
                type: 'success',
              }),
              error: (error) => ({
                title: 'Error',
                description: error.message,
                type: 'error',
              }),
            });
          }}
        >
          Promise Toast
        </Button>
      </div>
    </div>
  );
}

export function ToastVaryingHeightsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Short toast',
            });
          }}
        >
          Short
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Medium toast',
              description: 'This is a medium-length toast with a description.',
            });
          }}
        >
          Medium
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Long toast',
              description:
                'This is a longer toast notification with more content. It demonstrates how the toast component handles varying heights and ensures that all content is properly displayed.',
            });
          }}
        >
          Long
        </Button>
      </div>
    </div>
  );
}

export function ToastManualDismissExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => {
            toastManager.add({
              title: 'Manual Dismiss',
              description:
                'This toast will stay until you click the close button. It has no timeout.',
              type: 'info',
              timeout: 0,
            });
          }}
        >
          With Close Button
        </Button>
      </div>
    </div>
  );
}
