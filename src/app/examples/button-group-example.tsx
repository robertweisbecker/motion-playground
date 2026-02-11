import { Button } from '@/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ButtonGroupExample() {
  return (
    <>
      <ButtonGroup>
        <Button>Left</Button>
        <ButtonGroupSeparator />
        <Button>Middle</Button>
        <ButtonGroupSeparator />
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button>Top</Button>
        <ButtonGroupSeparator />
        <Button>Middle</Button>
        <ButtonGroupSeparator />
        <Button>Bottom</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>Filter</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button>Apply</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Button>Search</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button>XL Left</Button>
        <ButtonGroupSeparator />
        <Button>XL Middle</Button>
        <ButtonGroupSeparator />
        <Button>XL Right</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button>LG Left</Button>
        <ButtonGroupSeparator />
        <Button>LG Middle</Button>
        <ButtonGroupSeparator />
        <Button>LG Right</Button>
      </ButtonGroup>
      <ButtonGroup size="md">
        <Button>MD Left</Button>
        <ButtonGroupSeparator />
        <Button>MD Middle</Button>
        <ButtonGroupSeparator />
        <Button>MD Right</Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button>SM Left</Button>
        <ButtonGroupSeparator />
        <Button>SM Middle</Button>
        <ButtonGroupSeparator />
        <Button>SM Right</Button>
      </ButtonGroup>
      <ButtonGroup size="xs">
        <Button>XS Left</Button>
        <ButtonGroupSeparator />
        <Button>XS Middle</Button>
        <ButtonGroupSeparator />
        <Button>XS Right</Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <ButtonGroupText>Filter</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button>Apply</Button>
      </ButtonGroup>
    </>
  );
}
