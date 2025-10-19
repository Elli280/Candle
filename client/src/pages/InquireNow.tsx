import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertInquirySchema, type InsertInquiry, candleColors } from "@shared/schema";
import { CheckCircle, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { apiRequest } from "@/lib/queryClient";

export default function InquireNow() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      packageType: "",
      quantity: "",
      colors: [],
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "We've received your inquiry and will be in touch soon.",
      });
      form.reset();
      setSelectedColors([]);
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertInquiry) => {
    createInquiryMutation.mutate(data);
  };

  const toggleColor = (colorName: string) => {
    const newColors = selectedColors.includes(colorName)
      ? selectedColors.filter((c) => c !== colorName)
      : [...selectedColors, colorName];
    setSelectedColors(newColors);
    form.setValue("colors", newColors);
  };

  const isSubmitting = createInquiryMutation.isPending;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-[30vh] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" data-testid="section-inquire-hero">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-4" data-testid="text-inquire-title">
            Start Your Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-inquire-description">
            Let's create something beautiful together. Share your event details and we'll craft the perfect candle experience.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-inquire-form">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-card-border">
                <h2 className="font-serif text-3xl font-semibold text-card-foreground mb-6" data-testid="text-form-title">
                  Event Inquiry Form
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Doe"
                                {...field}
                                disabled={isSubmitting}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@example.com"
                                {...field}
                                disabled={isSubmitting}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                {...field}
                                disabled={isSubmitting}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                disabled={isSubmitting}
                                data-testid="input-event-date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger data-testid="select-event-type">
                                <SelectValue placeholder="Select your event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="gala">Gala</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="shower">Bridal/Baby Shower</SelectItem>
                              <SelectItem value="birthday">Birthday</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="packageType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Package Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                              <FormControl>
                                <SelectTrigger data-testid="select-package-type">
                                  <SelectValue placeholder="Select package" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="floor">Custom Floor Package (5-6" wide, 14-36" tall)</SelectItem>
                                <SelectItem value="semi">Custom Semi Package (3.5" wide, 6-12" tall)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity Needed</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., 50, 100, 200"
                                {...field}
                                disabled={isSubmitting}
                                data-testid="input-quantity"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="colors"
                      render={() => (
                        <FormItem>
                          <FormLabel>Preferred Colors (Select one or more)</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" data-testid="color-selector">
                              {candleColors.map((color, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => toggleColor(color.french)}
                                  disabled={isSubmitting}
                                  className={`p-3 rounded-lg border-2 transition-all hover-elevate active-elevate-2 ${
                                    selectedColors.includes(color.french)
                                      ? "border-primary bg-primary/10"
                                      : "border-border bg-card"
                                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                  data-testid={`button-color-${index}`}
                                >
                                  <div
                                    className="w-full aspect-square rounded-md mb-2 border border-border"
                                    style={{ backgroundColor: color.hex }}
                                  />
                                  <p className="text-xs font-medium text-center">{color.french}</p>
                                </button>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                          {selectedColors.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {selectedColors.map((color) => (
                                <Badge key={color} variant="secondary" data-testid={`badge-selected-${color}`}>
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your vision, special requests, or any questions..."
                              className="min-h-32"
                              {...field}
                              disabled={isSubmitting}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover-elevate active-elevate-2"
                      disabled={isSubmitting}
                      data-testid="button-submit-inquiry"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-card-border">
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-4" data-testid="text-contact-info">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <a
                        href="mailto:info@beyondluxecandle.com"
                        className="text-muted-foreground hover-elevate active-elevate-2 p-1 rounded inline-block"
                        data-testid="link-contact-email"
                      >
                        info@beyondluxecandle.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-muted-foreground hover-elevate active-elevate-2 p-1 rounded inline-block"
                        data-testid="link-contact-phone"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Service Area</p>
                      <p className="text-muted-foreground">DMV Area</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-card-border">
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-4" data-testid="text-next-steps">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-card-foreground">We Review Your Inquiry</p>
                      <p className="text-sm text-muted-foreground">
                        Our team carefully reviews your event details
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-card-foreground">Personalized Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        We'll reach out to discuss your vision
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-card-foreground">Custom Quote</p>
                      <p className="text-sm text-muted-foreground">
                        Receive a detailed proposal tailored to your event
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <p className="font-medium text-card-foreground">Flawless Execution</p>
                      <p className="text-sm text-muted-foreground">
                        We handle setup and takedown for a seamless experience
                      </p>
                    </div>
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
