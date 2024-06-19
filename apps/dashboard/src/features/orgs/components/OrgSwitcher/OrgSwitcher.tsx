import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { OrgSwitcherButton } from '../OrgSwitcherButton/OrgSwitcherButton';

export const OrgSwitcher = () => {
  return (
    <Menu>
      <OrgSwitcherButton />
      <MenuList shadow="lg" py="4" color={useColorModeValue('gray.600', 'gray.200')} px="3">
        <Text fontWeight="medium" mb="2">
          joe.biden@chakra-ui.com
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            Chakra UI
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            CareerLyft
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md">Add an account</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
