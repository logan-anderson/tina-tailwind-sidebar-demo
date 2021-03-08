import "./styles.css";
import { withTina, useForm, usePlugin } from "tinacms";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";
import { HeroBlock, hero_template } from "./components/hero";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { FeaturesBlock, features_template } from "./components/features";

const App = () => {
  // create a Tina form
  const [data, form] = useForm({
    initialValues: {
      nav: {
        name: "Company Test Name",
        items: [
          {
            label: "Pricing",
            link: "/",
          },
          {
            label: "Contact",
            link: "/",
          },
          {
            label: "Services",
            link: "/",
          },
        ],
      },
      blocks: [
        {
          _template: "hero",
          tagline: "Tagline Above Text",
          headline: "This is a large display heading.",
          text:
            "Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.",
        },
        {
          _template: "features",
          items: [
            {
              _template: "feature",
              title: "Longer Information 1",
              text:
                "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              link: "/",
            },
            {
              _template: "feature",
              title: "Longer Information 2",
              text:
                "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              link: "/",
            },
            {
              _template: "feature",
              title: "Longer Information 3",
              text:
                "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              link: "/",
            },
          ],
        },
      ],
    },
    fields: [],
    onSubmit: (values) => {
      alert(
        `You control what happens with your data \n --- \n ${JSON.stringify(
          values,
          null,
          2
        )}`
      );
    },
  });

  // register the Tina form so it appears in the sidebar
  usePlugin(form);

  // use `data` in your render to access form-mutated values
  return (
    <div className="App">
      <InlineForm form={form}>
        <Nav data={data.nav} />
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
        <Footer />
      </InlineForm>
    </div>
  );
};

const PAGE_BLOCKS = {
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  features: {
    Component: FeaturesBlock,
    template: features_template,
  },
};

export default withTina(App, { enabled: true, sidebar: true });
