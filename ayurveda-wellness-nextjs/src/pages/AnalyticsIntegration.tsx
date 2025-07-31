
import { useState, useEffect } from 'react';
import { Eye, EyeOff, Check, X, AlertCircle, Copy, Settings, BarChart, Target, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AnalyticsConfig {
  googleAnalytics4: {
    trackingId: string;
    integrated: boolean;
  };
  googleTagManager: {
    containerId: string;
    integrated: boolean;
  };
  metaPixel: {
    pixelId: string;
    pixelCode: string;
    integrated: boolean;
  };
  googleSearchConsole: {
    propertyUrl: string;
    verificationCode: string;
    integrated: boolean;
  };
}

const AUTHORIZED_EMAILS = [
  'admin@bookmyayurveda.com',
  'developer@bookmyayurveda.com',
  'analytics@bookmyayurveda.com'
];

const AnalyticsIntegration = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [config, setConfig] = useState<AnalyticsConfig>({
    googleAnalytics4: { trackingId: '', integrated: false },
    googleTagManager: { containerId: '', integrated: false },
    metaPixel: { pixelId: '', pixelCode: '', integrated: false },
    googleSearchConsole: { propertyUrl: '', verificationCode: '', integrated: false }
  });

  useEffect(() => {
    // Load saved configuration from localStorage
    const savedConfig = localStorage.getItem('analyticsConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleAuth = () => {
    if (AUTHORIZED_EMAILS.includes(email.toLowerCase()) && password === 'analytics2024') {
      setIsAuthorized(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials. Access denied.');
    }
  };

  const handleIntegration = (service: keyof AnalyticsConfig) => {
    const updatedConfig = {
      ...config,
      [service]: {
        ...config[service],
        integrated: true
      }
    };
    setConfig(updatedConfig);
    localStorage.setItem('analyticsConfig', JSON.stringify(updatedConfig));
  };

  const handleInputChange = (service: keyof AnalyticsConfig, field: string, value: string) => {
    const updatedConfig = {
      ...config,
      [service]: {
        ...config[service],
        [field]: value,
        integrated: false // Reset integration status when input changes
      }
    };
    setConfig(updatedConfig);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-deep-bottle-green flex items-center justify-center gap-2">
                <Settings className="h-6 w-6" />
                Analytics Integration
              </CardTitle>
              <p className="text-gray-600">Authorized personnel only</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter authorized email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              {authError && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {authError}
                </div>
              )}
              <Button onClick={handleAuth} className="w-full bg-deep-bottle-green hover:bg-evergreen">
                Access Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-deep-bottle-green mb-2">Analytics Integration Dashboard</h1>
          <p className="text-gray-600">Configure and manage analytics tools for Book My Ayurveda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Google Analytics 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-600" />
                  Google Analytics 4
                </div>
                <Badge variant={config.googleAnalytics4.integrated ? "default" : "secondary"}>
                  {config.googleAnalytics4.integrated ? (
                    <><Check className="h-3 w-3 mr-1" /> Integrated</>
                  ) : (
                    <><X className="h-3 w-3 mr-1" /> Not Integrated</>
                  )}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <strong>Instructions:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Go to Google Analytics dashboard</li>
                  <li>Create a new GA4 property for your website</li>
                  <li>Copy the Measurement ID (format: G-XXXXXXXXXX)</li>
                  <li>Paste it below and click Integrate</li>
                </ol>
              </div>
              <div>
                <Label htmlFor="ga4-tracking">Measurement ID</Label>
                <Input
                  id="ga4-tracking"
                  value={config.googleAnalytics4.trackingId}
                  onChange={(e) => handleInputChange('googleAnalytics4', 'trackingId', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                />
              </div>
              <Button
                onClick={() => handleIntegration('googleAnalytics4')}
                disabled={!config.googleAnalytics4.trackingId}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Integrate Google Analytics 4
              </Button>
            </CardContent>
          </Card>

          {/* Google Tag Manager */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-orange-600" />
                  Google Tag Manager
                </div>
                <Badge variant={config.googleTagManager.integrated ? "default" : "secondary"}>
                  {config.googleTagManager.integrated ? (
                    <><Check className="h-3 w-3 mr-1" /> Integrated</>
                  ) : (
                    <><X className="h-3 w-3 mr-1" /> Not Integrated</>
                  )}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
                <strong>Instructions:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Create a Google Tag Manager account</li>
                  <li>Set up a new container for your website</li>
                  <li>Copy the Container ID (format: GTM-XXXXXXX)</li>
                  <li>Paste it below and click Integrate</li>
                </ol>
              </div>
              <div>
                <Label htmlFor="gtm-container">Container ID</Label>
                <Input
                  id="gtm-container"
                  value={config.googleTagManager.containerId}
                  onChange={(e) => handleInputChange('googleTagManager', 'containerId', e.target.value)}
                  placeholder="GTM-XXXXXXX"
                />
              </div>
              <Button
                onClick={() => handleIntegration('googleTagManager')}
                disabled={!config.googleTagManager.containerId}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                Integrate Google Tag Manager
              </Button>
            </CardContent>
          </Card>

          {/* Meta Pixel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  Meta Pixel (Facebook)
                </div>
                <Badge variant={config.metaPixel.integrated ? "default" : "secondary"}>
                  {config.metaPixel.integrated ? (
                    <><Check className="h-3 w-3 mr-1" /> Integrated</>
                  ) : (
                    <><X className="h-3 w-3 mr-1" /> Not Integrated</>
                  )}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <strong>Instructions:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Go to Facebook Business Manager</li>
                  <li>Navigate to Events Manager → Data Sources</li>
                  <li>Create a new Pixel and copy the Pixel ID</li>
                  <li>Copy the full pixel code from the setup section</li>
                </ol>
              </div>
              <div>
                <Label htmlFor="meta-pixel-id">Pixel ID</Label>
                <Input
                  id="meta-pixel-id"
                  value={config.metaPixel.pixelId}
                  onChange={(e) => handleInputChange('metaPixel', 'pixelId', e.target.value)}
                  placeholder="1234567890123456"
                />
              </div>
              <div>
                <Label htmlFor="meta-pixel-code">Full Pixel Code</Label>
                <Textarea
                  id="meta-pixel-code"
                  value={config.metaPixel.pixelCode}
                  onChange={(e) => handleInputChange('metaPixel', 'pixelCode', e.target.value)}
                  placeholder="Paste the complete Meta Pixel code here..."
                  rows={4}
                />
              </div>
              <Button
                onClick={() => handleIntegration('metaPixel')}
                disabled={!config.metaPixel.pixelId || !config.metaPixel.pixelCode}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Integrate Meta Pixel
              </Button>
            </CardContent>
          </Card>

          {/* Google Search Console */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-green-600" />
                  Google Search Console
                </div>
                <Badge variant={config.googleSearchConsole.integrated ? "default" : "secondary"}>
                  {config.googleSearchConsole.integrated ? (
                    <><Check className="h-3 w-3 mr-1" /> Integrated</>
                  ) : (
                    <><X className="h-3 w-3 mr-1" /> Not Integrated</>
                  )}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                <strong>Instructions:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Go to Google Search Console</li>
                  <li>Add your website property</li>
                  <li>Choose HTML tag verification method</li>
                  <li>Copy the meta tag content value</li>
                </ol>
              </div>
              <div>
                <Label htmlFor="gsc-property">Property URL</Label>
                <Input
                  id="gsc-property"
                  value={config.googleSearchConsole.propertyUrl}
                  onChange={(e) => handleInputChange('googleSearchConsole', 'propertyUrl', e.target.value)}
                  placeholder="https://bookmyayurveda.com"
                />
              </div>
              <div>
                <Label htmlFor="gsc-verification">Verification Code</Label>
                <div className="flex gap-2">
                  <Input
                    id="gsc-verification"
                    value={config.googleSearchConsole.verificationCode}
                    onChange={(e) => handleInputChange('googleSearchConsole', 'verificationCode', e.target.value)}
                    placeholder="google-site-verification content"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(config.googleSearchConsole.verificationCode)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => handleIntegration('googleSearchConsole')}
                disabled={!config.googleSearchConsole.propertyUrl || !config.googleSearchConsole.verificationCode}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Integrate Search Console
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Status Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Integration Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${config.googleAnalytics4.integrated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium">Google Analytics 4</p>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${config.googleTagManager.integrated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium">Tag Manager</p>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${config.metaPixel.integrated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium">Meta Pixel</p>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${config.googleSearchConsole.integrated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium">Search Console</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyticsIntegration;
