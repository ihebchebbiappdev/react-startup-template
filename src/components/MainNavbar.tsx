import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from './navigation/NavMenuItem';
import SubMenuSection from './navigation/SubMenuSection';

const MainNavbar = () => {
  return (
    <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFont']">
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center">
         <NavMenuItem title="Le monde Fiori" image="/Articles/1.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Collections"
      items={[
        {
          href: "/category/le-monde-fiori/printemps",
          title: "Collections Printemps",
          description: "Découvrez nos créations printanières"
        },
        {
          href: "/category/le-monde-fiori/ete",
          title: "Collections Été",
          description: "Styles légers pour l'été"
        }
      ]}
    />
    <SubMenuSection
      title="Occasions"
      items={[
        {
          href: "/category/le-monde-fiori/mariage",
          title: "Marriage",
          description: "Collections élégantes pour mariage"
        },
        {
          href: "/category/le-monde-fiori/soiree",
          title: "Soirée",
          description: "Design festifs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="L'univers Cadeaux" image="/Articles/2.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Pack Composé"
      items={[
        {
          href: "/category/univers-cadeaux/pack-prestige",
          title: "Pack Prestige",
          description: "Notre collection prestige"
        },
        {
          href: "/category/univers-cadeaux/pack-premium",
          title: "Pack Premium",
          description: "Collection premium"
        },
        {
          href: "/category/univers-cadeaux/pack-trio",
          title: "Pack Trio",
          description: "Ensemble de trois pièces"
        },
        {
          href: "/category/univers-cadeaux/pack-duo",
          title: "Pack Duo",
          description: "Ensemble de deux pièces"
        },
        {
          href: "/category/univers-cadeaux/pack-mini-duo",
          title: "Pack Mini Duo",
          description: "Petit ensemble duo"
        }
      ]}
    />
    <SubMenuSection
      title="Pack Mono"
      items={[
        {
          href: "/category/univers-cadeaux/pack-mono",
          title: "Pack Mono",
          description: "Pièce unique"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Le prêt à porter" image="/Articles/3.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/pret-a-porter/homme/costumes",
          title: "Costumes",
          description: "Costumes élégants"
        },
        {
          href: "/category/pret-a-porter/homme/blazers",
          title: "Blazers",
          description: "Blazers raffinés"
        },
        {
          href: "/category/pret-a-porter/homme/chemises",
          title: "Chemises",
          description: "Chemises classiques"
        },
        {
          href: "/category/pret-a-porter/homme/pulls",
          title: "Pulls",
          description: "Pulls confortables"
        },
        {
          href: "/category/pret-a-porter/homme/pantalons",
          title: "Pantalons",
          description: "Pantalons élégants"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/pret-a-porter/femme/chemises",
          title: "Chemises",
          description: "Chemises féminines"
        },
        {
          href: "/category/pret-a-porter/femme/robes",
          title: "Robes",
          description: "Robes élégantes"
        },
        {
          href: "/category/pret-a-porter/femme/vestes",
          title: "Vestes/Manteaux",
          description: "Vestes et manteaux"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Accessoires" image="/Articles/4.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/accessoires/homme/portefeuilles",
          title: "Portefeuilles",
          description: "Portefeuilles élégants"
        },
        {
          href: "/category/accessoires/homme/ceintures",
          title: "Ceintures",
          description: "Ceintures raffinées"
        },
        {
          href: "/category/accessoires/homme/cravates",
          title: "Cravates",
          description: "Cravates élégantes"
        },
        {
          href: "/category/accessoires/homme/mallettes",
          title: "Mallettes",
          description: "Mallettes professionnelles"
        },
        {
          href: "/category/accessoires/homme/porte-cartes",
          title: "Porte-cartes",
          description: "Porte-cartes élégants"
        },
        {
          href: "/category/accessoires/homme/porte-cles",
          title: "Porte-clés",
          description: "Porte-clés raffinés"
        },
        {
          href: "/category/accessoires/homme/porte-cheques",
          title: "Porte-chèques",
          description: "Porte-chèques élégants"
        },
        {
          href: "/category/accessoires/homme/porte-passeports",
          title: "Porte-passeports",
          description: "Porte-passeports raffinés"
        }
      ]}
    />

    
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/accessoires/femme/sacs-main",
          title: "Sacs à main",
          description: "Sacs à main élégants"
        },
        {
          href: "/category/accessoires/femme/bags",
          title: "Sacs",
          description: "Collection de sacs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Le sur mesure" image="/Articles/4.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/accessoires/homme/portefeuilles",
          title: "Portefeuilles",
          description: "Portefeuilles élégants"
        },
        {
          href: "/category/accessoires/homme/ceintures",
          title: "Ceintures",
          description: "Ceintures raffinées"
        },
        {
          href: "/category/accessoires/homme/cravates",
          title: "Cravates",
          description: "Cravates élégantes"
        },
        {
          href: "/category/accessoires/homme/mallettes",
          title: "Mallettes",
          description: "Mallettes professionnelles"
        },
        {
          href: "/category/accessoires/homme/porte-cartes",
          title: "Porte-cartes",
          description: "Porte-cartes élégants"
        },
        {
          href: "/category/accessoires/homme/porte-cles",
          title: "Porte-clés",
          description: "Porte-clés raffinés"
        },
        {
          href: "/category/accessoires/homme/porte-cheques",
          title: "Porte-chèques",
          description: "Porte-chèques élégants"
        },
        {
          href: "/category/accessoires/homme/porte-passeports",
          title: "Porte-passeports",
          description: "Porte-passeports raffinés"
        }
      ]}
    />

    
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/accessoires/femme/sacs-main",
          title: "Sacs à main",
          description: "Sacs à main élégants"
        },
        {
          href: "/category/accessoires/femme/bags",
          title: "Sacs",
          description: "Collection de sacs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Outlet" image="/NewCollection/Together We Feast.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/outlet/homme/costumes",
          title: "Costumes",
          description: "Costumes en promotion"
        },
        {
          href: "/category/outlet/homme/blazers",
          title: "Blazers",
          description: "Blazers en solde"
        },
        {
          href: "/category/outlet/homme/chemises",
          title: "Chemises",
          description: "Chemises en promotion"
        },
        {
          href: "/category/outlet/homme/pulls",
          title: "Pulls",
          description: "Pulls en solde"
        },
        {
          href: "/category/outlet/homme/pantalons",
          title: "Pantalons",
          description: "Pantalons en promotion"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/outlet/femme/chemises",
          title: "Chemises",
          description: "Chemises en promotion"
        },
        {
          href: "/category/outlet/femme/robes",
          title: "Robes",
          description: "Robes en solde"
        },
        {
          href: "/category/outlet/femme/vestes",
          title: "Vestes/Manteaux",
          description: "Vestes et manteaux en promotion"
        }
      ]}
    />
  </div>
</NavMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavbar;
