export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'city',
        type: 'string',
        title: 'City',
      },
      {
        name: 'zipCode',
        type: 'string',
        title: 'Zip Code',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount',  // Fix title for discount field
      },
      {
        name: 'cartItems',
        type: 'array',
        title: 'Cart Items',
        of: [{ type: 'reference', to: { type: 'product' } }],  // Ensure 'product' type exists
      },
      {
        name: 'total',
        type: 'number',
        title: 'Total',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Success', value: 'success' },
            { title: 'Dispatch', value: 'dispatch' },
          ],
          layout: 'radio',
        },
        initialValue: 'pending',
      },
    ],
  };
  
























