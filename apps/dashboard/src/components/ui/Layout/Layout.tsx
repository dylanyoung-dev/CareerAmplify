import { Box, Circle, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react';
import { FC } from 'react';
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet
} from 'react-icons/bi';
import { OrgSwitcher } from 'src/features/orgs/components/OrgSwitcher/OrgSwitcher';
import { NavGroup } from '../NavGroup/NavGroup';
import { NavItem } from '../NavItem/NavItem';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <OrgSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
                <NavItem icon={<BiCommentAdd />} label="Inbox" />
              </Stack>
              <NavGroup label="Your Business">
                <NavItem icon={<BiCreditCard />} label="Transactions" />
                <NavItem icon={<BiUserCircle />} label="Customers" />
                <NavItem icon={<BiWallet />} label="Income" />
                <NavItem icon={<BiRedo />} label="Transfer" />
              </NavGroup>

              <NavGroup label="Seller Tools">
                <NavItem icon={<BiNews />} label="Payment Pages" />
                <NavItem icon={<BiEnvelope />} label="Invoices" />
                <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                <NavItem icon={<BiRecycle />} label="Subscription" />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Box w="full" h="full" rounded="lg" border="3px dashed currentColor" color={mode('gray.200', 'gray.700')}>
            {props.children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
