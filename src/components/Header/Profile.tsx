import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joel Maciel</Text>
          <Text color="gray.300" fontSize="small">
            jmviana37@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Joel Maciel"
        src="https://avatars.githubusercontent.com/u/77079093?v=4"
      />
    </Flex>
  );
}
