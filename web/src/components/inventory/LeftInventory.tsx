import InventoryGrid from './InventoryGrid';
import InventoryControl from './InventoryControl';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);

  return (
    <div className="left-inventory">
      <InventoryGrid inventory={leftInventory} />
      <InventoryControl />
    </div>
  );

};

export default LeftInventory;
