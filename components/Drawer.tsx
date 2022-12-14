import cn from 'classnames';

const ID = 'Drawer';

/**
 * @example
 * <Drawer>
 *   <Drawer.Content>
 *      <!-- Page content here -->
 *     <Drawer.Button>Open Drawer</Drawer.Button>
 *   </Drawer.Content>
 *   <Drawer.Side>
 *     <!-- Sidebar content here -->
 *   </Drawer.Side>
 * </Drawer>
 */

type DrawerProps = {
  children: React.ReactNode;
};
function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer drawer-end">
      <input id={ID} type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}

type ContentProps = {
  children: React.ReactNode;
};
function Content({ children }: ContentProps) {
  return <div className="drawer-content">{children}</div>;
}

type SideProps = {
  children: React.ReactNode;
};
function Side({ children }: SideProps) {
  return (
    <div className="drawer-side">
      <label htmlFor={ID} className="drawer-overlay opacity-0" />
      <div className="px-8 py-6 overflow-y-auto max-w-xl w-full bg-base-100 text-base-content">
        {children}
      </div>
    </div>
  );
}

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};
function Button({ className, children }: ButtonProps) {
  return (
    <label htmlFor={ID} className="btn w-full max-w-md">
      {children}
    </label>
  );
}

Drawer.Content = Content;
Drawer.Side = Side;
Drawer.Button = Button;

export default Drawer;
