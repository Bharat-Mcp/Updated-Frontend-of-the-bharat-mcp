// Mock data for Bharat MCP Landing Page

export const mockChatMessages = [
  {
    id: 1,
    role: 'user',
    text: 'Show invoices mismatching with GST 2B'
  },
  {
    id: 2,
    role: 'assistant',
    text: 'Found 3 invoices with GST 2B mismatches:\n\n1. Invoice #INV-2024-001 from Vendor ABC Ltd - Amount mismatch: ₹50,000 (Invoice) vs ₹48,000 (GST 2B)\n2. Invoice #INV-2024-045 from XYZ Enterprises - GSTIN not found in GST 2B\n3. Invoice #INV-2024-089 from PQR Suppliers - Tax amount discrepancy: ₹9,000 vs ₹8,500\n\nWould you like to see detailed breakdown of any invoice?'
  }
];

export const suggestedPrompts = [
  'Show invoices mismatching with GST 2B',
  'Summarize unpaid invoices for this month',
  'Which vendors have the highest risk?',
  'Explain this invoice in simple words'
];

export const analyticsData = {
  itcEligibility: [
    { name: 'Eligible', value: 75, fill: '#138808' },
    { name: 'Ineligible', value: 25, fill: '#FF9933' }
  ],
  gstMismatch: [
    { month: 'Jan', mismatches: 12 },
    { month: 'Feb', mismatches: 8 },
    { month: 'Mar', mismatches: 15 },
    { month: 'Apr', mismatches: 6 },
    { month: 'May', mismatches: 10 },
    { month: 'Jun', mismatches: 5 }
  ],
  vendorRisk: {
    high: 5,
    medium: 15,
    low: 80
  },
  matchingPercentage: 94,
  invoiceStatus: [
    { status: 'Processed', count: 450, fill: '#138808' },
    { status: 'Pending', count: 125, fill: '#FF9933' },
    { status: 'Rejected', count: 25, fill: '#dc2626' }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'MSME Owner',
    company: 'Kumar Enterprises',
    avatar: 'https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NjQxMTcyNjd8MA&ixlib=rb-4.1.0&q=85',
    quote: 'Reduced GST mismatch errors by 90%. Bharat MCP has transformed our accounting process.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CA Firm Partner',
    company: 'Sharma & Associates',
    avatar: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg',
    quote: 'We process invoices 5× faster. The AI automation is incredibly accurate.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'CFO',
    company: 'TechCorp India',
    avatar: 'https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NjQxMTcyNjd8MA&ixlib=rb-4.1.0&q=85',
    quote: 'Vendor reconciliations happen automatically. Saved us thousands of hours.'
  }
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '2,999',
    period: 'per month',
    description: 'Perfect for small businesses',
    features: [
      'Up to 100 invoices/month',
      'Email & WhatsApp capture',
      'AI extraction',
      'Basic GST matching',
      'Zoho Books integration',
      'Email support'
    ],
    popular: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '9,999',
    period: 'per month',
    description: 'For growing enterprises',
    features: [
      'Up to 1000 invoices/month',
      'All Starter features',
      '3-way matching',
      'Advanced GST 2B reconciliation',
      'Tally + SAP integrations',
      'Vendor chasing automation',
      'Priority support',
      'Audit trail'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations',
    features: [
      'Unlimited invoices',
      'All Growth features',
      'Custom workflows',
      'Dedicated account manager',
      'On-premise deployment option',
      'Advanced analytics',
      'Custom integrations',
      '24/7 support'
    ],
    popular: false
  }
];

export const integrations = [
  {
    name: 'Gmail',
    description: 'Auto-fetch invoices from email',
    icon: '📧'
  },
  {
    name: 'WhatsApp',
    description: 'Capture invoices from WhatsApp',
    icon: '💬'
  },
  {
    name: 'Zoho Books',
    description: 'Sync bills automatically',
    icon: '📊'
  },
  {
    name: 'Tally',
    description: 'Direct Tally integration',
    icon: '💼'
  },
  {
    name: 'SAP',
    description: 'Enterprise ERP sync',
    icon: '🏢'
  },
  {
    name: 'GST Portal',
    description: 'GST 2B reconciliation',
    icon: '🇮🇳'
  }
];

export const automationSteps = [
  {
    id: 1,
    title: 'Capture',
    description: 'Gmail/WhatsApp/Upload',
    icon: '📥'
  },
  {
    id: 2,
    title: 'Extract',
    description: 'AI + OCR Processing',
    icon: '🤖'
  },
  {
    id: 3,
    title: 'Match PO',
    description: 'Purchase Order Match',
    icon: '📋'
  },
  {
    id: 4,
    title: 'GST 2B',
    description: 'GST Validation',
    icon: '✓'
  },
  {
    id: 5,
    title: 'Create Bill',
    description: 'Auto Bill Creation',
    icon: '📄'
  },
  {
    id: 6,
    title: 'Alert',
    description: 'Vendor Notifications',
    icon: '🔔'
  }
];

export const solutionFeatures = [
  'Fetch all invoices automatically',
  'Extract every detail using AI + OCR',
  '3-way match (Invoice ↔ PO ↔ GST 2B)',
  'Auto-create bills in Zoho Books / Tally',
  'Vendor chasing via WhatsApp',
  'Duplicate invoice prevention',
  'GST-accurate reporting',
  'Full audit trail with history'
];

export const keyCapabilities = [
  {
    title: 'Invoice Capture',
    description: 'Automatically capture invoices from Gmail, WhatsApp, and manual uploads',
    features: ['Email parsing', 'WhatsApp integration', 'Bulk upload']
  },
  {
    title: 'AI Extraction',
    description: 'Extract vendor details, GSTIN, line items, taxes, and totals with AI',
    features: ['OCR processing', 'Smart field detection', '99% accuracy']
  },
  {
    title: '3-Way Match',
    description: 'Automated matching between Invoice, Purchase Order & GST 2B',
    features: ['PO matching', 'GST 2B validation', 'Discrepancy alerts']
  }
];

export const whyChooseUs = [
  {
    title: 'High extraction accuracy',
    description: '99%+ accuracy with AI-powered OCR',
    icon: '🎯'
  },
  {
    title: 'Zero duplicate invoices',
    description: 'Advanced IRN and hash-based detection',
    icon: '🛡️'
  },
  {
    title: '100% GST compliant',
    description: 'Full compliance with Indian GST regulations',
    icon: '✅'
  },
  {
    title: 'Seamless integrations',
    description: 'Works with Zoho, Tally, SAP, and more',
    icon: '🔗'
  }
];

export const dashboardStats = [
  { label: 'Total Invoices', value: '12,450', change: '+12%' },
  { label: 'Matched', value: '11,720', change: '+8%' },
  { label: 'Pending Review', value: '730', change: '-15%' },
  { label: 'GST Compliant', value: '94.2%', change: '+2.1%' }
];