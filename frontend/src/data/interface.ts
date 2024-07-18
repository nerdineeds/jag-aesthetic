// Define generic interfaces and types
export interface GenericObject {
  [key: string]: any;
}

export interface DataObject {
  data: {
    id: number;
    attributes: GenericObject;
  };
  meta: Record<string, unknown>;
}

// Base attributes interface for common fields
export interface BaseAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// HomePage attributes interface extending the base attributes
export interface HomePageAttributes extends BaseAttributes {
  Title: string;
  Description: string;
  // Add other specific fields as needed
}

// Function to extract attributes
export function extractAttributes(
  dataObject: DataObject
): GenericObject {
  if (dataObject && dataObject.data && dataObject.data.attributes) {
    return dataObject.data.attributes;
  } else {
    throw new Error('Invalid data structure');
  }
}

// Function to transform HomePage data
export function transformHomePage(
  dataObject: DataObject
): HomePageAttributes {
  const attributes = extractAttributes(dataObject);

  // Additional transformation if needed
  // For now, we are directly returning the extracted attributes
  return {
    createdAt: attributes.createdAt,
    updatedAt: attributes.updatedAt,
    publishedAt: attributes.publishedAt,
    Title: attributes.Title,
    Description: attributes.Description,
    // Map other fields if needed
  };
}

// Add more transform functions for other content types as needed
