import NavigationLink from './NavigationLink';

const NavigationMenu = () => {
  return (
    <>
      <NavigationLink to="/products">
        OUR PRODUCTS
      </NavigationLink>
      <NavigationLink to="/about">
        ABOUT US
      </NavigationLink>

      <a href="/blogs" className="font-medium text-deep-bottle-green hover:text-pea-green text-sm xl:text-base px-2 xl:px-3 py-2 transition-all duration-300">BLOGS</a>

      <NavigationLink to="/faq">
        FAQs
      </NavigationLink>
    </>
  );
};

export default NavigationMenu;
