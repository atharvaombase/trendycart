import React, { useCallback, useState } from "react";
import {
  Dropzone as MantineDropzone,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { Group, Text, Loader, Button } from "@mantine/core";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";

const DropzoneComponent = React.memo(({ onDrop, onReject, ...props }) => {
  const [loading, setLoading] = useState(false);

  const handleDrop = useCallback(
    async (files) => {
      console.log("Accepted files:", files);
      onDrop?.(files);

      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));

      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/v1/review", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error("Upload failed");

        const result = await response.json();
        console.log("Upload successful:", result);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false);
      }
    },
    [onDrop]
  );

  const handleReject = useCallback(
    (files) => {
      console.log("Rejected files:", files);
      onReject?.(files);
    },
    [onReject]
  );

  return (
    <MantineDropzone
      onDrop={handleDrop}
      onReject={handleReject}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group
        position="center"
        gap="xl"
        mih={220}
        style={{ pointerEvents: "none" }}
      >
        <MantineDropzone.Accept>
          <IconUpload
            size={52}
            color="var(--mantine-color-blue-6)"
            stroke={1.5}
          />
        </MantineDropzone.Accept>
        <MantineDropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
        </MantineDropzone.Reject>
        <MantineDropzone.Idle>
          <IconPhoto
            size={52}
            color="var(--mantine-color-dimmed)"
            stroke={1.5}
          />
        </MantineDropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5MB
          </Text>
          {loading && (
            <Group mt="md">
              <Loader size="sm" />
              <Text size="sm">Uploading...</Text>
            </Group>
          )}
        </div>
      </Group>
    </MantineDropzone>
  );
});

export default DropzoneComponent;
