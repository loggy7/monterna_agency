import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface FileUploadProps {
  label: string;
  description?: string;
  required?: boolean;
  accept?: string;
  maxSize?: number; // in MB
  value?: File | null;
  preview?: string;
  onChange: (file: File | null) => void;
  onRemove?: () => void;
}

export const FileUpload = ({
  label,
  description,
  required = false,
  accept = "image/jpeg,image/png,image/webp",
  maxSize = 10,
  value,
  preview,
  onChange,
  onRemove
}: FileUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>(preview || '');
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Le fichier ne doit pas dépasser ${maxSize}MB`);
      return;
    }

    // Validate file type
    const acceptedTypes = accept.split(',').map(t => t.trim());
    if (!acceptedTypes.some(type => file.type.match(type))) {
      setError('Type de fichier non supporté');
      return;
    }

    setError('');
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    onChange(file);
  };

  const handleRemove = () => {
    setPreviewUrl('');
    setError('');
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onRemove?.();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <Label className="text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {previewUrl ? (
        <div className="relative group">
          <div className="relative aspect-[3/4] max-h-80 overflow-hidden rounded-lg border-2 border-border">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black-pure/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={handleClick}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Changer
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={handleRemove}
                >
                  <X className="w-4 h-4 mr-2" />
                  Supprimer
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-full border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-gold/50 transition-colors bg-background/50"
        >
          <div className="flex flex-col items-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">Cliquez pour ajouter une photo</p>
            <p className="text-sm text-muted-foreground">
              {accept.includes('image') ? 'JPG, PNG, WEBP' : 'Fichiers acceptés'} jusqu'à {maxSize}MB
            </p>
          </div>
        </button>
      )}

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        required={required && !value && !previewUrl}
      />
    </div>
  );
};
