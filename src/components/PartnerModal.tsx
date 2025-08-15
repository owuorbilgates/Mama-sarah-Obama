import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerModal = ({ isOpen, onClose }: PartnerModalProps) => {
  const [formData, setFormData] = useState({
    organization_name: "",
    contact_person_name: "",
    email: "",
    website: "",
    partnership_details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.organization_name || !formData.contact_person_name || !formData.email || !formData.partnership_details) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('partners')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Thank you! Your submission has been received."
      });

      setFormData({
        organization_name: "",
        contact_person_name: "",
        email: "",
        website: "",
        partnership_details: ""
      });
      onClose();
    } catch (error) {
      console.error('Error submitting partner form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Partner with Us</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="organization_name" className="block text-sm font-medium mb-1">
              Organization Name *
            </label>
            <Input
              id="organization_name"
              type="text"
              required
              value={formData.organization_name}
              onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
              placeholder="Enter your organization name"
            />
          </div>

          <div>
            <label htmlFor="contact_person_name" className="block text-sm font-medium mb-1">
              Contact Person Name *
            </label>
            <Input
              id="contact_person_name"
              type="text"
              required
              value={formData.contact_person_name}
              onChange={(e) => setFormData({ ...formData, contact_person_name: e.target.value })}
              placeholder="Enter contact person's name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1">
              Website
            </label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="Enter your website URL"
            />
          </div>

          <div>
            <label htmlFor="partnership_details" className="block text-sm font-medium mb-1">
              Partnership Details *
            </label>
            <Textarea
              id="partnership_details"
              required
              value={formData.partnership_details}
              onChange={(e) => setFormData({ ...formData, partnership_details: e.target.value })}
              placeholder="Tell us about how you'd like to partner with us"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerModal;