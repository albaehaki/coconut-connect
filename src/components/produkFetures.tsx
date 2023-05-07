const features = [
    { name: 'Raw material', description: 'Wood powder, charcoal, binding agent' },
    { name: 'Size', description: '5 cm x 5 cm x 5 cm (per briquette)' },
    { name: 'Packaging', description: 'Plastic or carton' },
    { name: 'Moisture content', description: 'Less than 10%' },
    
    { name: 'Applications', description: 'BBQ, grilling, and various other cooking applications' },
    { name: 'Certification', description: 'Tested and verified by relevant institutions' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Briquette Charcoal Specifications</h2>
            <p className="mt-4 text-gray-500">
            Our eco-friendly products offer high-quality performance while minimizing their impact on the environment. We use sustainable materials and reduce waste throughout our production process to promote sustainability. Make a difference with our eco-friendly products without sacrificing quality.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 */}
          <div className="">
          <img
              src="./images/19.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            {/* <img
              src="./images/18.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="./images/17.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="./images/16.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="./images/19.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            /> */}
          </div>
        </div>
      </div>
    )
  }
  